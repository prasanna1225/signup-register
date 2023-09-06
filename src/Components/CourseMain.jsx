import React from 'react'
import Like from '../images/page57-61/Like.svg'
import Comment from '../images/page57-61/Comment.svg'
import Dislike from '../images/page57-61/Dislike.svg'
import ProfilePic from '../images/page57-61/ProfilePic.png'

const CourseMain = () => {
  return (
    <main className='h-auto'>
      <div className='w-full h-full'>  
        <iframe className='w-full my-4 md:h-96 h-80' min-h-fit  src="https://www.youtube.com/embed/x6f13UXWeQI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <p className='mt-8'>
        <h1 className='text-3xl font-sans font-bold my-2'>
            Transcript
        </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum cupiditate perferendis dolorum necessitatibus qui consequuntur quia, ab, sed eum porro libero natus architecto temporibus quidem maxime sunt, veniam suscipit. Hic quod laudantium sunt iure voluptate debitis non voluptatum quis aliquid, esse similique perspiciatis quia tenetur molestias quidem fuga, dolor id. Earum corporis molestias commodi adipisci perspiciatis aspernatur quis natus veniam nulla, eum repellat et voluptatum atque sapiente ipsum? Sunt rem, ex quisquam nihil perspiciatis inventore soluta quasi suscipit magni quidem neque veritatis eos aliquid sapiente explicabo laboriosam labore dolores tenetur, animi nostrum iusto. Rem iste laborum temporibus porro, tempora veniam soluta doloremque earum quo ex, repellendus commodi quas rerum facere ut exercitationem cumque ipsa asperiores fugiat eaque et officia ipsam! Sunt totam, vitae harum veniam distinctio illum aspernatur odit alias. Explicabo, assumenda non odio porro odit, veritatis saepe soluta numquam incidunt aliquid deleniti ducimus dolore laborum ipsa nobis, unde adipisci delectus eius magnam sit vitae inventore. Nam ratione expedita accusantium ducimus perspiciatis, quae inventore temporibus beatae excepturi maiores officia sunt, repellat asperiores impedit distinctio cumque explicabo sequi incidunt in neque doloribus eius! Minima nulla temporibus maxime fugiat doloribus vel deserunt culpa qui omnis expedita repellendus, officia, dolor nostrum, earum ratione.
        </p>
        <ul className='flex'>
            <li className='flex my-2 mx-4'>
                <img src={Like} className='my-4 -translate-y-1/2' alt='like' />
               <p className='mx-2 text-lg font-sans font-normal'>Like</p>
            </li>
            <li className='flex my-2 mx-4'>
            <img src={Dislike} className='my-4 -translate-y-1/2' alt='dislike' />
                <p className='mx-2 text-lg font-sans font-normal'>Dislike</p>
            </li>
            <li className='flex my-2 mx-4'>
            <img src={Comment} className='my-4 -translate-y-1/2' alt='comment' />
                <p className='mx-2 text-lg font-sans font-normal'>Comment</p>
            </li>
        </ul>
      </p>
      <p>
        <div className='flex'>
        <img src={ProfilePic} className='h-12 w-12' alt='ProfilePic'/>
        <p className='ml-4'>
            <p className='font-medium'>MUZEEBURRAHAMAN</p><p className='opacity-60 leading-4'>12 Days ago</p>
        </p>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum ipsa laudantium minima accusantium sunt nemo impedit nulla harum labore eligendi in debitis eius cumque dolorem dolores qui molestiae expedita quibusdam quaerat, vel facere! Vero doloremque, quam accusamus voluptas, sed magnam nulla tempore aspernatur nihil nemo earum dicta aliquam quo rem aperiam sit sunt delectus modi at illo iure ad excepturi optio quis. Qui nesciunt aut quia nostrum recusandae veniam ipsum quas ducimus molestiae assumenda voluptates, possimus officia iste ad voluptatibus, pariatur totam inventore deleniti omnis? Iste, natus. Fuga quae distinctio ex? Numquam esse maiores sunt est illo voluptate quae!
        <ul className='flex'>
            <li className='flex my-2 mx-4'>
                <img src={Like} className='my-3 -translate-y-1/2 h-4 w-4' alt='like' />
               <p className='mx-2 text-sm font-sans font-normal'>Like</p>
            </li>
            <li className='flex my-2 mx-4'>
            <img src={Dislike} className='my-3 -translate-y-1/2 h-4 w-4' alt='dislike'/>
                <p className='mx-2 text-sm font-sans font-normal'>Dislike</p>
            </li>
            <li className='flex my-2 mx-4'>
            <img src={Comment} className='my-3 -translate-y-1/2 h-4 w-4' alt='comment'/>
                <p className='mx-2 text-sm font-sans font-normal'>Comment</p>
            </li>
        </ul>
      </p>
      <p>
        <div className='flex'>
        <img src={ProfilePic} className='h-12 w-12' alt='ProfilePic'/>
        <p className='ml-4'>
            <p className='font-medium'>MUZEEBURRAHAMAN</p><p className='opacity-60 leading-4'>12 Days ago</p>
        </p>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque laborum ipsa laudantium minima accusantium sunt nemo impedit nulla harum labore eligendi in debitis eius cumque dolorem dolores qui molestiae expedita quibusdam quaerat, vel facere! Vero doloremque, quam accusamus voluptas, sed magnam nulla tempore aspernatur nihil nemo earum dicta aliquam quo rem aperiam sit sunt delectus modi at illo iure ad excepturi optio quis. Qui nesciunt aut quia nostrum recusandae veniam ipsum quas ducimus molestiae assumenda voluptates, possimus officia iste ad voluptatibus, pariatur totam inventore deleniti omnis? Iste, natus. Fuga quae distinctio ex? Numquam esse maiores sunt est illo voluptate quae!
        <ul className='flex'>
            <li className='flex my-2 mx-4'>
                <img src={Like} className='my-3 -translate-y-1/2 h-4 w-4' alt='like'/>
               <p className='mx-2 text-sm font-sans font-normal'>Like</p>
            </li>
            <li className='flex my-2 mx-4'>
            <img src={Dislike} className='my-3 -translate-y-1/2 h-4 w-4' alt='dislike'/>
                <p className='mx-2 text-sm font-sans font-normal'>Dislike</p>
            </li>
            <li className='flex my-2 mx-4'>
            <img src={Comment} className='my-3 -translate-y-1/2 h-4 w-4' alt='comment'/>
                <p className='mx-2 text-sm font-sans font-normal'>Comment</p>
            </li>
        </ul>
      </p>
      <p className='my-2 font-sans font-medium text-lg' style={{color:'#215D4F'}}>View more comments......</p>
    </main>
  )
}

export default CourseMain
