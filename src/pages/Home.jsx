import Header from "../components/Header";
import Footer from "../components/Footer";
import PostList from "../components/PostList";
import posts from "../data/posts";


function Home() {
    return(
        <>
        <Header title="Rizzotto Blog" />
        <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <PostList posts={posts}/>
        </main>
        <Footer text="© Rizzotto Blog - Estudo Guiado sobre React Route" />
        </>
    )
};

export default Home;