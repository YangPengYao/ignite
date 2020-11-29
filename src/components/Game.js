import React, { useState, useEffect, useCallback } from 'react';
// react-router-dom
import { Link } from 'react-router-dom';
// styleing and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { popup } from '../animation';
// redux
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
// util
import { smallImage } from '../util';

function Game({ name, released, image, id, pathId }) {
  const [initGaneDetail, setIitGameDetail] = useState(true);

  // for layoutId
  const stringifyId = id.toString();

  // load detail
  const dispatch = useDispatch();
  const loadDetailHandler = async () => {
    await dispatch(loadDetail(id));
    // when showing the game detail, background (home) can't be scrolled
    document.body.style.overflow = 'hidden';
  };

  const init = useCallback(async () => {
    await dispatch(loadDetail(id));
    // when showing the game detail, background (home) can't be scrolled
    document.body.style.overflow = 'hidden';
  }, [dispatch, id]);

  useEffect(() => {
    if (pathId && stringifyId === pathId && initGaneDetail) {
      init();
      setIitGameDetail(false);
    }
  }, [stringifyId, pathId, initGaneDetail, init]);

  return (
    <StyledGame
      variants={popup}
      initial='hidden'
      animate='show'
      layoutId={stringifyId}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringifyId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringifyId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
