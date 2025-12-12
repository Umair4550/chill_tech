export const sendWhatsappBooking = (service) => {
  const msg = `Hello, I want to book this service: ${service.title}\nDescription: ${service.fullDesc}`;

  return `https://wa.me/923029855708?text=${encodeURIComponent(msg)}`;
};
