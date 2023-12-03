// Section.jsx
import React from 'react';

const Section = React.forwardRef(({ title, content, id }, ref) => {
  return (
    <div ref={ref} id={id} className="section pb-10 pl-10">
      <h2 className="text-xl font-bold underline decoration-2 decoration-black mb-2 text-left">{title}</h2>
      <p className="text-left font-bold">{content}</p>
    </div>
  );
});

export default Section;
