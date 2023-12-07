import Image from 'next/image';
import Link from 'next/link';   
import {  Card } from 'antd';
const { Meta } = Card;
const ProjectCard = ({technology, imageSrc, shortDes , githubLink , DeployLink }) => {
    return (
      <Card
          className='p-4 bg-[#091D3A] border border-[#1E2D3D] group  cursor-pointer transition-all duration-500 '
            style={{
            width: 300,
            }}
            cover={
            <Image
                alt="example"
                src={imageSrc}
                height={200}
                width={250}
            />
            }
            
        >
            <Meta
            description={shortDes}
            />
            <div className="flex flex-col text-center gap-2 mt-[10px]">
                <Link target='_blank' className='py-[10px] px-[14px] bg-[#1C2B3A] text-white rounded-lg' href={DeployLink}>View Project</Link>
                <Link target='_blank' className='py-[10px] px-[14px] bg-[#1C2B3A] text-white rounded-lg' href={githubLink}>Check In Github</Link>                
            </div>
            <div className='absolute top-0 left-0'>
                <p className='bg-black bg-opacity-80 hidden group-hover:block rounded-br-lg text-white text-lg font-[450] px-5 border border-[#1E2D3D] py-2'>{technology}</p>
            </div>
        </Card>
    );
  };

  export default ProjectCard;
  