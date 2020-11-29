import React, { useEffect } from 'react';
// react-router-dom
import { useLocation } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
// components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
// styleing and animation
import styled from 'styled-components';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { fadeIn } from '../animation';

function Home() {
  // get current location
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];

  const dispatch = useDispatch();

  // fetch data
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // get data
  const { popular, upcoming, newGames, searched } = useSelector(
    (state) => state.games
  );

  const searchedGames = !!searched.length && (
    <>
      <h2>Searched Games</h2>
      <Games>
        {searched.map((game) => (
          <Game
            key={game.id}
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            pathId={pathId}
          />
        ))}
      </Games>
    </>
  );

  return (
    <GameList variants={fadeIn} initial='hidden' animate='show'>
      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searchedGames}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              pathId={pathId}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              pathId={pathId}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              pathId={pathId}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
