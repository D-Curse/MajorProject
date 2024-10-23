import React, { useState, useEffect, useRef } from 'react';

function Timeline() {
  const timelineData = [
    {
      step: 'Step 1',
      keypoints: [
        'Introduction to Deep Learning - Understanding Neural Networks',
        'Hands-on session on building CNNs for image classification',
        'Setting up the dataset - Collecting real vs. AI-generated images',
      ],
    },
    {
      step: 'Step 2',
      keypoints: [
        'Image Preprocessing Techniques - Resizing, Normalization, and Data Augmentation',
        'Splitting data into training, validation, and testing sets',
        'Building Convolutional Layers for feature extraction',
      ],
    },
    {
      step: 'Step 3',
      keypoints: [
        'DeepFake Detection - Understanding how DeepFakes are created',
        'Training CNNs on Real vs. AI-generated images',
        'Initial model results - Observing overfitting and underfitting',
      ],
    },
    {
      step: 'Step 4',
      keypoints: [
        'Advanced Neural Network Architectures - DenseNet and ResNet',
        'Challenges with training - Addressing the vanishing gradient problem',
        'Using skip connections and deeper layers to improve training (ResNet)',
        'Regularization techniques (Dropout, Batch Normalization) to reduce overfitting',
      ],
    },
    {
      step: 'Step 5',
      keypoints: [
        'Evaluating Model Performance - Precision, Recall, and F1 Score',
        'Fine-tuning the model - Adjusting learning rates and optimizer choice',
        'Deploying the DeepFake detection model for real-time image analysis',
        'Model improvement insights - Experimenting with data augmentation and more complex architectures',
        'Ethical implications and potential use cases in media',
      ],
    },
  ];
  

  const [visibleElements, setVisibleElements] = useState([]);
  const [animatedElements, setAnimatedElements] = useState([]);
  const timelineRef = useRef(null);

  const handleScroll = () => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const viewportHeight = window.innerHeight;
    const elements = [];

    timeline.childNodes.forEach((child, index) => {
      const elementRect = child.getBoundingClientRect();
      const elementTop = elementRect.top;
      const elementBottom = elementRect.bottom;

      if (elementTop <= viewportHeight && elementBottom >= 0) {
        elements.push(index);
      }
    });

    setVisibleElements(elements);
  };

  useEffect(() => {
    setAnimatedElements([]);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setAnimatedElements((prevAnimatedElements) => {
      const newAnimatedElements = new Set(prevAnimatedElements);
      visibleElements.forEach((element) => {
        const timeoutId = setTimeout(() => {
          setAnimatedElements((prevAnimatedElements) => {
            const newAnimatedElements = new Set(prevAnimatedElements);
            newAnimatedElements.add(element);
            return newAnimatedElements;
          });
        }, 2000);
      });
      return newAnimatedElements;
    });
  }, [visibleElements]);

  return (
    <div className='timeline'>
      <div className="relative w-full my-20">
        {/* Center Line */}
        <div className="absolute w-[2px] bg-white left-1/2 top-0 h-full -translate-x-1/2 opacity-[50%]"></div>

        <div className="flex flex-col items-center justify-center" ref={timelineRef}>
          {timelineData.map((timeline, index) => (
            <div key={timeline.step} className="w-full sm:w-[80%]">
              <div className="w-full flex items-center mb-8 sm:mb-12 justify-center sm:justify-none">
                {index % 2 === 0 ? (
                  <>
                    {/* Left Side */}
                    <div className={`w-1/2 sm:w-1/3 flex justify-end px-4 sm:px-8 ${
                      visibleElements.includes(index) && !animatedElements.has(index)
                        ? 'animate-fadeInLeft'
                        : ''
                    }`}>
                      <div className="border-2 rounded-[20px] p-4 sm:p-8 w-full">
                        <ul className="list-disc pl-6">
                          {timeline.keypoints.map((point, pointIndex) => (
                            <li key={pointIndex} className="my-2 text-base text-white sm:text-xl">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Center Dots */}
                    <img src="/images/landingPage/Circle.png" alt="" className="w-4 sm:w-6" />

                    {/* Right Side */}
                    <div className={`w-1/2 sm:w-1/3 flex justify-start px-4 sm:px-8 ${
                      visibleElements.includes(index) && !animatedElements.has(index)
                        ? 'animate-fadeInRight'
                        : ''
                    }`}>
                      <div className="w-full sm:w-[65%] text-center font-bold bg-[#F0F0F0] p-4 rounded-[25px] text-base sm:text-2xl">
                        {timeline.step}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left Side */}
                    <div className={`w-1/2 sm:w-1/3 flex justify-end px-4 sm:px-8 ${
                      visibleElements.includes(index) && !animatedElements.has(index)
                        ? 'animate-fadeInLeft'
                        : ''
                    }`}>
                      <div className="w-full sm:w-[65%] text-center font-bold bg-[#F0F0F0] p-4 rounded-[25px] text-base sm:text-2xl">
                        {timeline.step}
                      </div>
                    </div>

                    {/* Center Dots */}
                    <img src="/images/landingPage/Circle.png" alt="" className="w-4 sm:w-6" />

                    {/* Right Side */}
                    <div className={`w-1/2 sm:w-1/3 flex justify-start px-4 sm:px-8 ${
                      visibleElements.includes(index) && !animatedElements.has(index)
                        ? 'animate-fadeInRight'
                        : ''
                    }`}>
                      <div className="border-2 rounded-[20px] p-4 sm:p-8 w-full">
                        <ul className="list-disc pl-6">
                          {timeline.keypoints.map((point, pointIndex) => (
                            <li key={pointIndex} className="my-2 text-base text-white sm:text-xl">
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Timeline;
