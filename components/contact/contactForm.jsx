import ContactRight from "./contactRight";

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px] py-4 ">
      <form className="text-[16px] font-[450] flex flex-col gap-1">
        <label className="text-[#607B96] " htmlFor="name">
          _Name
        </label>
   
        <input
          className="text-[#465E77] mt-[10px] py-[10px] px-4 rounded-md bg-[#011221] border border-[#1E2D3D]"
          type="text"
          name="name"
          placeholder="Mahedi Hasan"
        />
     
        <label className="text-[#607B96] " htmlFor="email">
          _Email
        </label>
     
        <input
          className="text-[#465E77] placeholder:text-[#465E77]] mt-[10px] py-[10px] px-4 rounded-md bg-[#011221] border border-[#1E2D3D]"
          type="email"
          name="email"
          placeholder="you@gmail.com"
        />
      
        <label className="text-[#607B96] " htmlFor="message">
          _Message
        </label>     
        <textarea
          placeholder="Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. Lerned a few nice tips. Thanks! |"
          className="text-[#465E77] p-3 shadow-xl rounded-md bg-[#011221] mt-[10px] border border-[#1E2D3D]"
          name="message"
          id=""
          cols="22"
          rows="10"
        ></textarea>
        
        <input type="submit" className="bg-[#1C2B3A] px-[14] block mt-[10px] py-[10px] pr-8 pl-2 rounded-[8px] border border-[#1E2D3D]" value="Submit-message "/>
      </form>
    </div>
  );
};

export default ContactForm;
