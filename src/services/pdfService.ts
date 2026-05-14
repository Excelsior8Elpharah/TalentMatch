import jsPDF from 'jspdf';
import { toPng } from 'html-to-image';

/**
 * Capture an element using html-to-image and generate a PDF.
 * This approach is better for modern CSS like oklch (Tailwind 4).
 */
export async function exportToPdf(elementId: string, fileName: string = 'talentmatch-report.pdf') {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with id ${elementId} not found`);
    return;
  }

  try {
    // Generate PNG using html-to-image
    const dataUrl = await toPng(element, {
      quality: 0.95,
      pixelRatio: 2,
      backgroundColor: '#f8fafc',
      style: {
        transform: 'none',
        margin: '0',
      }
    });

    const img = new Image();
    img.src = dataUrl;
    await new Promise((resolve) => (img.onload = resolve));

    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'px',
      format: 'a4',
    });

    const imgWidth = img.width;
    const imgHeight = img.height;
    
    const pagePadding = 0; // No padding for full capture look
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    
    // Calculate how the image fits width-wise
    const scale = pdfWidth / imgWidth;
    const scaledImgHeight = imgHeight * scale;
    
    let heightLeft = scaledImgHeight;
    let position = 0;

    // First page
    pdf.addImage(dataUrl, 'PNG', 0, position, pdfWidth, scaledImgHeight, undefined, 'FAST');
    heightLeft -= pdfHeight;

    // Remaining pages
    while (heightLeft > 0) {
      position = heightLeft - scaledImgHeight;
      pdf.addPage();
      pdf.addImage(dataUrl, 'PNG', 0, position, pdfWidth, scaledImgHeight, undefined, 'FAST');
      heightLeft -= pdfHeight;
    }

    pdf.save(fileName);
  } catch (error) {
    console.error('Error generating multi-page PDF:', error);
  }
}
