import React from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const LatexMath = ({ equation, inline = false }) => {
  return inline ? <InlineMath math={equation} /> : <BlockMath math={equation} />;
};

export default LatexMath;
