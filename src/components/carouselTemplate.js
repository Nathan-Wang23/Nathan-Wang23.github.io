import React from 'react';
import { GlassMagnifier } from '@datobs/react-image-magnifiers';
import { ScrollPanel } from 'primereact/scrollpanel';
import './carouselTemplate.css'

const CarouselTemplate = ({ project }) => {
    const renderImages = () => {
        if (project.img !== "" && Array.isArray(project.img)) {
            return project.img.map((src, index) => (
                <React.Fragment key={index}>
                    <GlassMagnifier
                        style={{
                            zIndex: 0,
                            border: "3px solid #B3A369",
                            borderRadius: "5px",
                            width: "100%"
                        }}
                        imageSrc={src}
                        imageAlt={`${project.title} ${index}`}
                        largeImageSrc={src}
                        magnifierBorderColor="#002233"
                        square={true}
                    />
                    <br />
                </React.Fragment>
            ));
        }
        return null;
    };

    return (
        <div className='card-style'>
            {renderImages()}
            {project.movie !== "" && project.img === "" &&
                <div className='mov-back'>
                    <video className="projMov" autoPlay loop muted>
                        <source src={project.movie} type="video/mp4" />
                    </video>
                </div>
            }

            {project.movie !== "" && project.img !== "" &&
                <div className='mov-back-with-img'>
                    <img className="projImg-with-movie" src={project.img} alt={project.title} />
                    <video className="projMov" autoPlay loop muted>
                        <source src={project.movie} type="video/mp4" />
                    </video>
                </div>
            }

            <div className='sidePiece'>
                <h2 className="projTit">{project.title}</h2>
                <ScrollPanel style={{ width: '100%', height: '40vh' }}>
                    <p className="desc">{project.description}</p>
                </ScrollPanel>
                {project.paper !== "" && <button className="paper-button" onClick={() => window.open(project.paper, '_blank')}>View Paper/Project!</button>}
                {project.other !== "" && <button className="paper-button" onClick={() => window.open(project.other, '_blank')}>Other Links</button>}
            </div>
        </div>
    );
};

export default CarouselTemplate;