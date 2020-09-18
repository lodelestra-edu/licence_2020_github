import React from 'react';
import Comment from './Comment';


const Movie = ({title, synopsis, pictureSrc, ratings}) => {
  return (
    <div
      class="wrapper max-w-xs bg-gray-50 rounded-b-md shadow-lg overflow-hidden"
    >
      <div>
        <img src={pictureSrc} alt="montaña" />
      </div>
      <div class="p-3 space-y-3">
        <h3 class="text-gray-700 font-semibold text-md">
          { title }
        </h3>
        <p class="text-sm text-gray-900 leading-sm">
          { synopsis }
        </p>
        <p>
          <span class="flex">
            {
              Array(5).fill().map((e, i) =>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className={`h-5 ${i<ratings ? "text-teal-600": "text-gray-300"}`}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              )
            }
          </span>
        </p>
        <Comment/>
      </div>
    </div>
  )
}


export default Movie;

