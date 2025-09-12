import QRCode from 'qrcode';

export const generateQRCode = async (url: string, size: number = 256): Promise<string> => {
  try {
    const qrCodeDataURL = await QRCode.toDataURL(url, {
      width: size,
      margin: 2,
      color: {
        dark: '#2F1B14', // --color-text
        light: '#FFF8DC'  // --color-background
      }
    });
    return qrCodeDataURL;
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw error;
  }
};

export const downloadQRCode = (dataURL: string, filename: string = 'menu-qr-code') => {
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = `${filename}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};