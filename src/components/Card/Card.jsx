function Card ({recipe}) {

return (
    <li id={recipe.id}>
    <img className='w-full h-48 object-cover rounded-t-lg mb-4' src={recipe.imageUrl} alt={recipe.title} />
    <p className='text-gray-700 mb-4'>Auteur: {recipe.author}</p>
    <h2 className='text-xl font-bold mb-2' >{recipe.title}</h2>
    <p className='text-gray-700 mb-4'>Difficulté: {recipe.difficulty}</p>
    <p className='text-gray-700 mb-4'>Catégorie: {recipe.category}</p>
    <p className='text-gray-700 mb-4'>{recipe.description}</p>
  </li>
)

}

export default Card;

