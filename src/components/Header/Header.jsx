import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='max-w-screen-xl mx-auto md:px-16'>
            <div className='flex justify-between items-center py-4 m-4 border-b-2 '>
                <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </div>
        </div>

    );
};

export default Header;