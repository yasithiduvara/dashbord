import Card from '@/components/Card';
import React from 'react'


const cardsData = [
  {
    title: 'Task 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Polynomial_of_degree_three.svg/1200px-Polynomial_of_degree_three.svg.png',
  },
  {
    title: 'Task 2',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    imageSrc: 'https://edynamiclearning.com/wp-content/uploads/2019/05/EDL150-Principles_of_IT_1a.jpg',
  },
  {
    title: 'Task 3',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    imageSrc: 'https://www.1training.org/wp-content/uploads/2015/01/Information-Technology-and-Cloud-Computing-1024x870-e1422276882760-1.jpg',
  },
  {
    title: 'Task 4',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    imageSrc: 'https://study.com/cimages/videopreview/dl4oegfq0k.jpg',
  },
];


const page = () => {
  return (
    <div className="container  p-4 mx-auto my-5 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 cursor-pointer">
      {cardsData.map((card, index) => (
         <Card key={index} title={card.title} description={card.description} imageSrc={card.imageSrc} />
 
      ))}
      </div>
  )
}

export default page



