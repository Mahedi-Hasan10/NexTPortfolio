import Image from 'next/image';
import Link from 'next/link';   
import {  Card } from 'antd';
const { Meta } = Card;
const ProjectCard = ({technology, imageSrc, shortDes , githubLink , DeployLink }) => {
    return (
      <Card
          className=' hover:scale-105 hover:shadow-sm hover:shadow-green-400 h-fit bg-[#091D3A] border border-[#1E2D3D] group  cursor-pointer transition-all duration-500 '
            style={{
            width: 300,
            }}
            cover={
            <Image
                alt="example"
                src={imageSrc}
                height={131}
                width={250}
                className='max-h-[131px]'
            />
            }
            
        >
            <div>
                <p className='line-clamp-2 text-[#607B96] lg:text-[24px] md:text-[20px] text-[17px] lg:font-medium font-normal leading-[150%]'>{shortDes}</p>
            </div>
            <div className="flex flex-col text-center gap-2 mt-[10px] justify-end">
                <Link target='_blank' className='lg:py-[10px] lg:px-[14px] p-[5px] bg-[#1C2B3A] text-white rounded-lg' href={DeployLink}>View Project</Link>
                <Link target='_blank' className='lg:py-[10px] lg:px-[14px] p-[5px] bg-[#1C2B3A] text-white rounded-lg' href={githubLink}>Check In Github</Link>                
            </div>
            <div className='absolute top-0 left-0'>
                <p className='bg-black bg-opacity-80 hidden group-hover:block rounded-br-lg text-white text-lg font-[450] px-5 border border-[#1E2D3D] py-2'>{technology}</p>
            </div>
        </Card>
    );
  };

  export default ProjectCard;
  