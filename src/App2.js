import React, { useRef, useEffect } from 'react';
import './App.css';

function App() {
  const sections = [
    { id: 0, title: 'Welcome to the page', content: 'This is the main content of your page.' },
    { id: 1, title: 'Section 1', content: 'This is the first section.' },
    { id: 2, title: 'Section 2', content: 'This is the second section.' },
    // Add more sections as needed
  ];

  const [currentSectionIndex, setCurrentSectionIndex] = React.useState(0);
  const sectionRefs = useRef({})
  for (let i = 0; i < sections.length; i++) {
    sectionRefs[i] = sections[i];
  }

  function listenScrollEvent(e) {
    var pageHeight = document.getElementById("home").getBoundingClientRect().height;
    if (window.scrollY > 67) {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    if (this.props.init) {
      window.scrollY = document.getElementById("appHead").getBoundingClientRect().height;
    }
  }, [])

  const scrollToNextSection = () => {
    console.log(currentSectionIndex, sections.length)
    let nextIndex = currentSectionIndex + 1;
    if (currentSectionIndex + 1 >= sections.length) {
      console.log("reset")
      nextIndex = 0
    }

    if (nextIndex < sections.length) {
      sectionRefs[nextIndex].current.scrollIntoView({ behavior: 'smooth' });
      setCurrentSectionIndex(nextIndex);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Scroll to Next Section</h1>
      </header>
      <main>
        {sections.map((section, index) => (
          <section key={section.id} className="content" ref={sectionRefs[index]}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </main>
      <footer>
        <button onClick={scrollToNextSection}>Scroll to Next Section</button>
      </footer>
    </div>
  );
}

export default App;
