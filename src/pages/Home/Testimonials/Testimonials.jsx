const Testimonials = () => {
  const testimonials = [
    {
      id: 101,
      name: "Emily Johnson",
      description:
        "Dream Weddings & Events exceeded my expectations. They made planning my wedding stress-free and turned my vision into reality. I can't thank them enough!",
      image: "https://i.ibb.co/nLdcvnP/a.jpg",
    },
    {
      id: 102,
      name: "Michael Smith",
      description:
        "The Venue Selection service provided by Dream Weddings & Events was outstanding. They found us the perfect location that matched our style and budget.",
      image: "https://i.ibb.co/DK4Kn7t/b.jpg",
    },
    {
      id: 103,
      name: "Sophia Rodriguez",
      description:
        "I was blown away by the Decor & Design service. The team at Dream Weddings & Events transformed our venue into a fairytale setting. It was absolutely magical.",
      image: "https://i.ibb.co/C72KSzx/c.jpg",
    },
  ];


  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine">Testimonials</h2>
      <p className="max-w-4xl mx-auto text-center text-lg my-5 p-5 md:p-4 lg:p-2" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine">Explore the heartfelt experiences of couples who trusted us with their special day. Our Testimonials section is a testament to the joy, satisfaction, and lasting memories we create. Read their stories and see how we turn dreams into reality. Your love story could be the next one we help bring to life.</p>
      <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between my-20 p-5 md:p-4 lg:p-2 ">
        {testimonials.map((testimonial) => (
          // eslint-disable-next-line react/no-unknown-property
          <div key={testimonial.id} testimonial={testimonial} className="flex flex-col justify-center items-center shadow-xl shadow-[#acccd4] p-6 rounded-tl-[60px] rounded-br-[60px] md:rounded-tl-[100px] md:rounded-br-[100px] border-2 border-[#8ECDDD] hover:shadow-2xl hover:shadow-[#8ECDDD]"
          data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine">
            <img src={testimonial.image} alt="" className="w-[150px] rounded-full border-4 border-[#8ECDDD]" />
            <h3 className="text-xl text-center font-semibold mt-5">{testimonial.name}</h3>
            <p className="text-justify mt-3">{testimonial.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
