'use client'
import Image from 'next/image'
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { useState } from 'react'
import { useEffect } from 'react'
import { useInView } from "react-intersection-observer";

const users = ["Hamzah", "Ali", "Okasha",]
const stds = ["Hamzah", "Ali", "Okasha",]

const menu = [
  {
    title: "Biryani",
    description: 'Lazeez Biryani',
    price: 500,
    coldDrink: true,
    image: '/images/biryani.jpg'
  },
  {
    title: "Tikka",
    description: 'Lazeez Tikka',
    price: 600,
    coldDrink: true,
    image: '/images/tikka.jpg'
  },
  {
    title: "Shawarma",
    description: 'Lazeez Shawarma',
    price: 200,
    coldDrink: true,
    image: '/images/shawarma.jpg'
  },
  {
    title: "Karhai",
    description: 'Lazeez Karhai',
    price: 800,
    coldDrink: true,
    image: '/images/karhai.jpeg'
  },
  {
    title: "Fish & Grill",
    description: 'Lazeez Fish & Grill',
    price: 900,
    coldDrink: true,
    image: '/images/fish.jpg'
  },
]

export default function Home() {
  const [show, setShow] = useState(false)
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const fadeInOut = {
    hidden: { opacity:0, y:-50  },
    visible: { opacity: 1, y:50 },
  };

  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   } else {
  //     controls.start("hidden");
  //   }
  // }, [controls, inView]);
  return (
    <>
      <div className='h-screen'>

      </div>
      <div className='flex flex-col'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{
            layout: {
              duration: 1,
              type: 'spring',
            }
          }}
          layout
          onClick={() => setShow(!show)} className='p-8 bg-orange-300 w-[50vw]'>
          {show ? "Not Showing" : "Showing"}
          {show && (
            <motion.p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, minus alias. Optio id eveniet culpa doloribus commodi eligendi eum, eius ipsum numquam enim, aspernatur perspiciatis est repellendus excepturi voluptatem eaque!
            </motion.p>
          )}
          <div className='w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
            <AnimatePresence>
              {show &&
                menu.map((item, id) => {
                  return (
                    <motion.div
                      ref={ref}
                      initial="hidden"
                      animate={controls}
                      variants={fadeInOut}
                      exit={{opacity:0, y:-50}}
                      transition={{ duration: 1.5 }}
                      onViewportEnter={() => controls.start("visible")}
                      onViewportLeave={() => controls.start("hidden")}
                      key={id} className='border bg-yellow-400 m-4 rounded-md p-5 shadow-2xl'>
                      <Image src={item.image} alt='ronaldo' width={300} height={300} className="w-[300px] object-cover" />
                      <div className='mt-5'>
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <p>{item.coldDrink ? "Pepsi" : "Water"}</p>
                      </div>
                    </motion.div>
                  )
                })
              }
            </AnimatePresence>
          </div>
        </motion.button>
      </div>
      <div className='h-screen'>
        {/* <motion.div
        className='my-6 m-auto h-40 w-40 bg-blue-900'
        initial={{x:0, y:0, scale:0.4}}
        animate={{rotate:360, scale:1.5}}
        exit={{rotate:-360, scale:-0.5}}
        transition={{
          duration:3,
          repeat: Infinity,
        }}
        >

        </motion.div> */}
      </div>
    </>
  )
}
      {/* <div className='grid grid-cols-12 rounded-full h-screen'>
      <div className='bg-red-800 p-10 border border-black col-span-3 text-gray-400 text-lg font-bold'>
        Sidebar
        <ul>
        <li>_________________________</li>
        <li>_________________________</li>
        <li>_________________________</li>
        <li>_________________________</li>
        <li>_________________________</li>
        </ul>
      </div>
      <div className='bg-gray-700 p-10 border border-black col-span-9 text-lg font-bold'>
        Main Content
      <ul className='text-gray-400'>
        <li>_________________________</li>
        <li>_________________________</li>
        <li>_________________________</li>
        <li>_________________________</li>
        <li>_________________________</li>
        </ul>
      </div>
    </div> */}
      {/* <div className='grid grid-cols-12 grid-rows-5 gap-2'>
      <div className='col-span-12 h-20 bg-gray-200 row-span-1'>
          Navbar
      </div>
      <div className='row-span-3 col-span-3 bg-gray-300'>
        Sidebar
      </div>
      <div className='row-span-3 col-span-9 bg-gray-400'>
          Hero Component 
      </div>
      <div className='col-span-12 h-20 bg-gray-500 row-span-1'>
          Footer
      </div>
    </div> */}