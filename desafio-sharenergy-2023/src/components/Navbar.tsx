const Navbar = () => {
  return (
    <div className='max-w-2xl mx-auto flex justify-center items-center space-x-4'>
      <a href='/'>Home</a>
      <a href='/pagecats'>Cats</a>
      <a href='/pagedogs'>Dogs</a>
      <a href='/pageclients'>Clients</a>
    </div>
  );
};

export default Navbar;
