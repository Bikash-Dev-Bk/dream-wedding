import faq from '../../../assets/faq.jpg'

const FAQ = () => {
  return (
    <div className="max-w-7xl mx-auto my-32 p-5 md:p-4 lg:p-2">
      <h2 className="text-4xl font-bold text-center">
        Frequently Asked Questions
      </h2>
      <p className="max-w-4xl mx-auto text-center text-lg mt-5 mb-24">If you can't find the answers you're looking for in our FAQs, please don't hesitate to reach out to our dedicated team. We're here to assist you and ensure your wedding event is everything you've envisioned. Your satisfaction is our priority, and we're excited to be part of your special day.</p>
      <div className='flex gap-6 flex-col lg:flex-row items-center'>
        <div className='flex-1'>
          <img src={faq} alt="" className="rounded-tl-[60px] rounded-br-[60px] md:rounded-tl-[100px] md:rounded-br-[100px] border-4 border-[#8ECDDD] hover:shadow-2xl hover:shadow-[#8ECDDD]" />
        </div>
        <div  className='flex-1'>
          <div className="collapse collapse-plus bg-[#8ECDDD] mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What types of wedding services do you offer?
            </div>
            <div className="collapse-content">
              <p>
                We offer a wide range of wedding services, including full
                wedding planning, venue selection, decor and design, catering
                and culinary, entertainment, and photography/videography. We
                tailor our services to meet your specific needs and preferences.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#8ECDDD] mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How do I get started with your wedding planning services?
            </div>
            <div className="collapse-content">
              <p>
                Getting started is easy! Simply contact us through our website
                or give us a call to schedule an initial consultation. During
                this consultation, we will discuss your vision, budget, and
                goals for your wedding.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#8ECDDD] mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can you help with destination weddings?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we specialize in both local and destination weddings. We
                have experience planning weddings in various locations and can
                assist with all the logistics of a destination wedding.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#8ECDDD] mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Do you provide customizable wedding packages?
            </div>
            <div className="collapse-content">
              <p>
                Absolutely! We understand that every wedding is unique. We offer
                customizable packages to ensure that our services align
                perfectly with your wedding vision and budget.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-[#8ECDDD] mb-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can you help with budget management for the wedding?
            </div>
            <div className="collapse-content">
              <p>
                Yes, budget management is an integral part of our services. We
                will work closely with you to create a budget that aligns with
                your goals and help you make informed decisions to stay on
                track.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
