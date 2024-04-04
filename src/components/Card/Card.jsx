function Card ({recipe}) {

return (
    <div id={recipe.id}>
    <img className='w-full h-48 object-cover rounded-t-lg mb-4' src={recipe.imageUrl} alt={recipe.title} />
    <h2 className='text-xl font-bold mb-2' >{recipe.title}</h2>
    <span className='text-gray-700 mb-4' >Auteur: {recipe.author}</span>
    <span className='text-gray-700 mb-4' >Difficulté:  {Array(recipe.difficulty).fill('⭐').join(' ')}</span>
    <span className='text-gray-700 mb-4'>Catégorie: {recipe.category}</span>
    <p className='text-gray-700 mb-4'>{recipe.description}</p>
  </div>
)

}

export default Card;

