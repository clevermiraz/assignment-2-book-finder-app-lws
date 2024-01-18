import BookList from "./components/BookList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <>
            <Navbar />
            <main className="my-10 lg:my-14">
                <BookList />
            </main>
            <Footer />
        </>
    );
}
