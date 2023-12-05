
const InfoUniversity = () => {
    return (
        <div className="flex">
        <div className="w-full flex gap-[20px]  p-8 text-[#607B96] lg:text-[18px] text-[16px] font-[450]">
          <div className="lg:grid md:grid hidden grid-cols-1 gap-1 items-center justify-center">
            <p className="flex items-center">1</p>
            <p className="flex items-center">2</p>
            
          </div>
          <div className="lg:grid md:grid hidden grid-cols-1 gap-1 items-center">
            <p className="flex items-center">*</p>
            <p className="flex items-center">*</p>
            
          </div>
          <div className="grid grid-cols-1 gap-1 items-center">
            <p className="flex items-center">
              I haven&quot;t started my university journey yet, but I&quot;m excited to
                begin! I plan to pursue a degree in Computer Science and engineering .
            </p>
           
          </div>
        </div>
      </div>
    );
};

export default InfoUniversity;