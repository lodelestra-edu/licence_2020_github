import React from 'react';
import Movie from '../components/Movie';
import Layout from '../components/Layout';

const movies = [
  {
    title: "terminator",
    synopsis: "Sit alias animi nemo numquam optio recusandae, a repudiandae velit commodi ullam dolorem. Dolore nemo natus harum distinctio quae. Ullam, dolore quaerat.",
    ratings: 4,
  },
  {
    title: "terminator 2",
    synopsis: "Deserunt tempore eos nostrum assumenda iste ea mollitia rerum nemo. Nam exercitationem dolor neque vel beatae qui recusandae rem unde voluptatibus voluptate.",
    ratings: 5,
  },
  {
    title: "terminator 3",
    synopsis: "Alias odio architecto aperiam vitae sapiente tenetur voluptas illum itaque velit iste. Dicta eius ullam cumque, quos quasi quaerat odit rerum officia.",
    ratings: 3,
  },
  {
    title: "Joker",
    synopsis: "Pellentesque mauris elit, vulputate eu sagittis ut, molestie vitae orci. Integer rutrum, ex vitae sodales sagittis, risus neque consequat libero, eget lacinia orci nibh et turpis.",
    ratings: 5,
  },
  {
    title: "Tenet",
    synopsis: "Nulla tristique aliquet egestas. Nunc posuere dolor lorem, sit amet mattis mi sagittis nec. Nullam facilisis justo sit amet sem bibendum pretium.",
    ratings: 0,
  },
  {
    title: "Gladiator",
    synopsis: "Le général romain Maximus est le plus fidèle soutien de l'empereur Marc Aurèle, qu'il a conduit de victoire en victoire. Jaloux du prestige de Maximus, et plus encore de l'amour que lui voue l'empereur, le fils de Marc Aurèle, Commode, s'arroge brutalement le pouvoir, puis ordonne l'arrestation du général et son exécution. Maximus échappe à ses assassins, mais ne peut empêcher le massacre de sa famille. Capturé par un marchand d'esclaves, il devient gladiateur et prépare sa vengeance.",
    ratings: 5,
  },
]

const Movies = () => {
  return (
    <Layout>
        <h2 className="text-4xl text-blue-700 font-bold tracking-wider uppercase">Best movies</h2>
        <div className="mt-8 grid gap-8 grid-cols-3">
          {
            movies.map((movie)=>
              <div>
                <Movie
                  title={movie.title}
                  synopsis={movie.synopsis}
                  ratings={movie.ratings}
                  pictureSrc="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png"
                />
              </div>
            )
          }
        </div>
    </Layout>
  )
}


export default Movies;
