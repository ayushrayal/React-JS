import Card from "./components/Card.jsx";

const App = () => {
  const people = [
    {
      name: "Virat Kohli",
      image:
        "https://media.gettyimages.com/id/2241622275/photo/india-odi-international-headshot-session.jpg?s=1024x1024&w=gi&k=20&c=elW35F-bwXG6fMDB4hY9A30b0cplo1ZfYT2tcOTHHhE=",
      about:
        "Indian cricketer. Passionate about fitness, discipline, and winning mindset.",
      instagramFollowers: 270000000,
      savedPosts: 124,
    },
    {
      name: "Neha Jethwani",
      image:
        "https://imgs.search.brave.com/T9hjdvaqqF0HIMJsyy2VnYKTJvbxu_VWFp4pTEZbbYo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbmZs/dWVuY2Vyc3BsYWNl/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyNS8xMC9OZWhh/LUpldGh3YW5pLUNh/cmVlci1Kb3VybmV5/LndlYnA",
      about:
        "Lifestyle influencer sharing daily routines, fashion, and positivity.",
      instagramFollowers: 1200000,
      savedPosts: 89,
    },
    {
      name: "Rohit Sharma",
      image:
        "https://media.gettyimages.com/id/2241622860/photo/perth-australia-rohit-sharma-poses-during-an-india-odi-international-headshot-session-on.jpg?s=612x612&w=0&k=20&c=rgXTD-QdUSljO5iwRlHuhoSfi5lIR35JZmWEyqzdxZw=",
      about:
        "Indian cricket team captain. Calm leader with explosive batting skills.",
      instagramFollowers: 36000000,
      savedPosts: 76,
    },
    {
      name: "Shraddha Kapoor",
      image:
        "https://m.media-amazon.com/images/M/MV5BOWVhN2IzMmYtYTVkNy00YmUzLWI4MjItNTA1NmJhNDU5NzM3XkEyXkFqcGc@._V1_QL75_UX525_.jpg",
      about:
        "Actor, singer, and nature lover. Believes in simplicity and kindness.",
      instagramFollowers: 92000000,
      savedPosts: 142,
    },
    {
      name: "CarryMinati",
      image:
        "https://imgs.search.brave.com/mCGfrzgUVihdBprKVjPIWzDf00kHeeRk7HOupksHF9s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzAz/NTExNi5qcGc",
      about: "Content creator known for roasts, gaming, and raw humor.",
      instagramFollowers: 18000000,
      savedPosts: 54,
    },
    {
      name: "Anushka Sharma",
      image:
        "https://m.media-amazon.com/images/M/MV5BZWY3YTA1YTctMWZjNi00ZDBjLTliMWUtMmI0Nzc5MzE5NTFhXkEyXkFqcGc@._V1_QL75_UX525_.jpg",
      about:
        "Actor and producer. Strong voice for mental health and clean living.",
      instagramFollowers: 69000000,
      savedPosts: 101,
    },
    {
      name: "MS Dhoni",
      image:
        "https://imgs.search.brave.com/LA23_gfA6ggS7w9nnK-Fjj8rzDI95BAK_YNkbdlg--U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1QlpESmhNalEz/TUdJdFptUTRNeTAw/TnpFeUxXRTNNRGd0/TkRKbU16ZGhOVGsx/TW1GaVhrRXlYa0Zx/Y0djQC5qcGc",
      about:
        "Former Indian cricket captain. Calm under pressure, sharp decision maker.",
      instagramFollowers: 47000000,
      savedPosts: 65,
    },
    {
      name: "Komal Pandey",
      image:
        "https://imgs.search.brave.com/nqmGz-aa1vGiNbZeIFifD9X-sT9Y2mw26MVQ93MT-Rw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZlL2Fl/L2FhL2ZlYWVhYTgz/N2U3YTI3MDIxYjM5/YTg0MTg2NGVjZDcy/LmpwZw",
      about:
        "Fashion creator pushing boundaries with bold styling and confidence.",
      instagramFollowers: 1900000,
      savedPosts: 97,
    },
  ];

  return (
    <div className="herosection">
      {people.map((person) => (
        <Card
          user={person.name}
          followers={person.instagramFollowers}
          bookmarks={person.savedPosts}
          image={person.image}
          about={person.about}
        />
      ))}
      <br />
    </div>
  );
};

export default App;
