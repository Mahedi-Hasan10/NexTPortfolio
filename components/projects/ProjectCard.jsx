import Image from 'next/image';
import Link from 'next/link';   
import {  Card } from 'antd';
const { Meta } = Card;
const ProjectCard = ({ imageSrc, category, title, description }) => {
    return (
      <Card
          className='p-4 bg-[#091D3A] border border-[#1E2D3D]'
            style={{
            width: 300,
            }}
            cover={
            <Image
                alt="example"
                src="/Background.png"
                height={100}
                width={150}
            />
            }
            
        >
            <Meta
            description="Portfolio web site created with nextjs."
            />
            <div className="flex flex-col text-center gap-2 mt-[10px]">
                <Link className='py-[10px] px-[14px] bg-[#1C2B3A] text-white rounded-lg' href="3">View Project</Link>
                <Link className='py-[10px] px-[14px] bg-[#1C2B3A] text-white rounded-lg' href="3">Check In Github</Link>                
            </div>
        </Card>
    );
  };

  export default ProjectCard;
  