import React from 'react';

function SectionsItemList({title, propName, data }) {
  return (
    <section>
      <span className="title"></span>
      {
        data.map((item, index, arr) => (
          <span className="capitalize" key={item[propName].name}>
            {`${item[propName].name}${(arr.length - 1) === index ? '' : ', '}`}
          </span>
        ))
      }
    </section>
  );
}

export default SectionsItemList;
