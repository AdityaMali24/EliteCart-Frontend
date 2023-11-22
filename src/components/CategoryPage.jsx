import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../Redux/Category/Action';
import { Link } from 'react-router-dom';

const CategoryPage = () => {
      const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getCategory());
    }, [dispatch])

    const data = useSelector((state)=> state?.category)
    console.log(data)


    // const callouts = [
    //     {
    //       name: 'Desk and Office',
    //       description: 'Work from home accessories',
    //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    //       imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    //       href: '#',
    //     },
    //     {
    //       name: 'Self-Improvement',
    //       description: 'Journals and note-taking',
    //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    //       imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    //       href: '#',
    //     },
    //     {
    //       name: 'Travel',
    //       description: 'Daily commute essentials',
    //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    //       imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    //       href: '#',
    //     },
    //   ]
  return (
    <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
              {data?.categories?.map((category, index) => (
                <div key={category.Name} className="group relative">
                    <Link>
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    
                    <img
                      src={`http://localhost:8006/uploads/category/${category.Image}`}
                      alt={category.Image}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>                
                  <p className="text-base font-semibold text-gray-900">{category.Name}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}

export default CategoryPage
