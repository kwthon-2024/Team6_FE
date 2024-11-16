import React, { useState } from 'react';
import frontendRoadmap from '../assets/frontendRoadmaparrow.png';
import backendRoadmap from '../assets/backendRoadmaparrow.png';
import dataRoadmap from '../assets/dataRoadmaparrow.png';

function Roadmap() {
  const jobCategories = [
    'Frontend',
    'Backend',
    'Full Stack',
    'iOS',
    'Android',
    'DevOps',
    'QA',
    'API Design',
    'PostgreSQL',
    'Software Architect',
    'AI and Data Scientist',
    'AI Engineer',
    'Data Analyst',
    'Blockchain',
    'Product Manager',
    'UX Design',
  ];

  const courseDetails = {
    Frontend: {
      department: '정보융합학부',
      courses: [
        '창의설계입문',
        '그래픽디자인',
        '인터랙티브심리학',
        '인터랙티브미디어개론',
        'UX/UI 디자인',
        'HCI와UX평가',
        '실험설계및분석',
        '웹프로그래밍',
      ],
    },
    Backend: {
      department: '소프트웨어학부',
      courses: [
        '알고리즘 기초',
        '데이터베이스 관리',
        '서버 사이드 프로그래밍',
        '네트워크 기본',
      ],
    },
    'AI and Data Scientist': {
      department: '데이터과학부',
      courses: [
        '기계학습 개론',
        '데이터 시각화',
        '딥러닝',
        '통계 분석',
        '데이터 마이닝',
      ],
    },
  };

  const roadmapSteps = {
    Frontend: [
      { name: 'HTML', x: '50%', y: '4.7%' },
      { name: 'CSS', x: '50%', y: '17.4%' },
      { name: 'JavaScript', x: '50%', y: '30.2%' },
      { name: 'Git', x: '41%', y: '43%' },
      { name: 'GitHub', x: '56.4%', y: '43%' },
      { name: 'npm', x: '50%', y: '55.7%' },
      { name: 'React', x: '50%', y: '68.5%' },
      { name: 'Tailwind', x: '50%', y: '81.3%' },
      { name: 'Vitest', x: '50%', y: '94%' },
    ],
    Backend: [
      { name: 'JavaScript', x: '34%', y: '5%' },
      { name: 'Go', x: '52.5%', y: '5%' },
      { name: 'Python', x: '68%', y: '5%' },
      { name: 'Git', x: '40.8%', y: '19.5%' },
      { name: 'GitHub', x: '56%', y: '19.5%' },
      { name: 'PostgreSQL', x: '50%', y: '34%' },
      { name: 'REST', x: '30%', y: '48.2%' },
      { name: 'JSON APIs', x: '50%', y: '48.2%' },
      { name: 'JWT', x: '69%', y: '48.2%' },
      { name: 'Redis', x: '50%', y: '62.5%' },
      { name: 'ORMs', x: '16%', y: '77%' },
      { name: 'ACID', x: '31%', y: '77%' },
      { name: 'Transactions', x: '52%', y: '77%' },
      { name: 'N+1 Problem', x: '79%', y: '77%' },
      { name: 'Integration Testing', x: '20%', y: '91%' },
      { name: 'Unit Testing', x: '50%', y: '91%' },
      { name: 'Functional Testing', x: '80%', y: '91%' },
    ],
    'AI and Data Scientist': [
      { name: 'Mathematics', x: '48%', y: '4.5%' },
      { name: 'Statistics', x: '48%', y: '17.2%' },
      { name: 'Econometrics', x: '48%', y: '30%' },
      { name: 'Coding', x: '48%', y: '42.5%' },
      { name: 'Exploratory Data Analysis', x: '48%', y: '55.5%' },
      { name: 'Machine Learning', x: '48%', y: '68%' },
      { name: 'Deep Learning', x: '48%', y: '80.5%' },
      { name: 'MLOps', x: '48%', y: '93.4%' },
    ],
  };

  const roadmapImages = {
    Frontend: frontendRoadmap,
    Backend: backendRoadmap,
    'AI and Data Scientist': dataRoadmap,
  };

  const [selectedJob, setSelectedJob] = useState('');
  const [selectedStep, setSelectedStep] = useState('');

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setSelectedStep('');
  };

  const handleStepClick = (step) => {
    if (selectedStep === step) {
      setSelectedStep('');
    } else {
      setSelectedStep(step);
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center p-6">
      {/* 직무 선택 섹션 */}
      <div className="text-lg font-bold mb-2 self-start">
        원하는 직무를 선택해주세요
      </div>
      <div className="flex flex-wrap gap-2 justify-start w-full max-w-3xl">
        {jobCategories.map((job, index) => (
          <button
            key={index}
            onClick={() => handleJobClick(job)}
            className={`px-2 py-1 border-2 rounded-xl text-xs font-semibold transition ${
              selectedJob === job
                ? 'bg-main01 text-white border-main01'
                : 'border-main01 text-black'
            }`}
          >
            {job}
          </button>
        ))}
      </div>

      {/* 관련 전공 수업 섹션 */}
      {selectedJob && courseDetails[selectedJob] && (
        <div className="mt-4 w-full border-t border-gray-300">
          <div className="mt-2 w-full max-w-3xl">
            <h2 className="text-lg font-bold mb-2">관련 전공 수업</h2>
            <div className="inline-block text-center bg-main01 text-white px-2 py-2 text-sm font-bold rounded-lg mb-[-10px] ml-2">
              {courseDetails[selectedJob].department}
            </div>
            <div className="border-2 border-main01 rounded-lg p-2">
              <ul className="flex flex-wrap gap-2 pt-2">
                {courseDetails[selectedJob].courses.map((course, index) => (
                  <li key={index} className="px-1 text-sm rounded-lg">
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* 로드맵 섹션 */}
      <div className="mt-4 w-full border-t border-gray-300"></div>
      <div className="mt-2 w-full max-w-3xl">
        {selectedJob && roadmapSteps[selectedJob] && (
          <div className="relative w-full max-w-3xl">
            <h2 className="text-lg font-bold mb-2">{selectedJob} 로드맵</h2>
            {/* 로드맵 이미지 */}
            <div className="relative">
              <img
                src={roadmapImages[selectedJob]}
                alt={`${selectedJob} 로드맵`}
                className="max-w-full relative"
              />
              {/* 버튼 배치 */}
              {roadmapSteps[selectedJob].map((step, index) => (
                <React.Fragment key={index}>
                  <button
                    key={index}
                    onClick={() => handleStepClick(step.name)}
                    className={`absolute px-2 py-[0.5px] text-xs rounded-lg font-medium transition ${
                      selectedStep === step.name
                        ? 'bg-main01 text-white'
                        : 'border border-main01 bg-white text-black'
                    }`}
                    style={{
                      top: step.y,
                      left: step.x,
                      transform: 'translate(-50%, -50%)',
                      whiteSpace: 'nowrap',
                      zIndex: 10,
                    }}
                  >
                    {step.name}
                  </button>

                  {selectedStep === step.name && (
                    <div
                      className="absolute text-xs font-medium text-black bg-white"
                      style={{
                        top: step.y,
                        left: `calc(${step.x} + 10%)`,
                        transform: 'translate(0, -50%)',
                        zIndex: 20,
                        padding: '2px 4px',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                      }}
                    >
                      인터랙티브미디어개론
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Roadmap;
