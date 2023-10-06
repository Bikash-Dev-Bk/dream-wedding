const Testimonials = () => {
  const testimonials = [
    {
      id: 101,
      name: "Emily Johnson",
      description:
        "Dream Weddings & Events exceeded my expectations. They made planning my wedding stress-free and turned my vision into reality. I can't thank them enough!",
      image:
        "https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1696625797~exp=1696626397~hmac=02c2f1e904a10baee31c8366e6d90870dc7b460bb83f0aa41480a7a1deca5712",
    },
    {
      id: 102,
      name: "Michael Smith",
      description:
        "The Venue Selection service provided by Dream Weddings & Events was outstanding. They found us the perfect location that matched our style and budget.",
      image:
        "https://img.freepik.com/free-photo/young-man-wearing-blue-outfit-looking-confident_1298-291.jpg?size=626&ext=jpg&ga=GA1.1.753260621.1677338918&semt=ais",
    },
    {
      id: 103,
      name: "Sophia Rodriguez",
      description:
        "I was blown away by the Decor & Design service. The team at Dream Weddings & Events transformed our venue into a fairytale setting. It was absolutely magical.",
      image:
        "https://img.freepik.com/free-photo/young-female-smiling_1187-4947.jpg?size=626&ext=jpg&ga=GA1.2.753260621.1677338918&semt=ais",
    },
  ];
  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Testimonials</h2>
      <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between my-20 p-5 md:p-4 lg:p-2">
        {testimonials.map((testimonial) => (
          // eslint-disable-next-line react/no-unknown-property
          <div key={testimonial.id} testimonial={testimonial} className="flex flex-col justify-center items-center card card-compact bg-base-100 shadow-xl p-4">
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
