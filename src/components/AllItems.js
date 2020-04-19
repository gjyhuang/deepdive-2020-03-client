import React from 'react';
import axios from 'axios';

const AllItems = ({
  items,
  setItems,
  itemType,
  blockClass,
  model
}) => {
  const getItems = async () => {
    const url = `/api/${itemType}`;
    console.log('url', url)
    const { data } = await axios.get(`/api/${itemType}`);
    console.log(items)
    setItems(items => [...items, data]);
    console.log(items)
  }

  const modelKeys = Object.keys(model);

  React.useEffect(() => {
    getItems();
  }, []);

  return (
    <div className={blockClass}>
      <div className={blockClass + "__header"}>
  <h2>{itemType[0].toUpperCase() + itemType.slice(1)}</h2>
      </div>
      <div>
        {items.map(item =>
          <div
            className={blockClass + "__item"}
            key={item[modelKeys[0]]}
          >
            <div className={blockClass + "item__item-" + modelKeys[1]}>
              {item[modelKeys[1]]} {item[modelKeys[0]]}
            </div>
            <div className={blockClass + "__item-" + modelKeys[1]}>
              {item[modelKeys[2]]}
            </div>
          </div>)}
      </div>
    </div>
  )
}

export default AllItems;


// import React from 'react';
// import AllItems from '../AllItems';

// const AllOptions = () => {
//   // state in our functional component, with React hooks
//   const [options, setOptions] = React.useState([]);
//   const model = {
//     key1: "id",
//     key2: "body",
//     key3: "imageUrl"
//   }

//   console.log('options in AllOptions', options)

//   return (
//     <AllItems
//       items={options}
//       setItems={setOptions}
//       itemType="options"
//       blockClass="option"
//       model={model}
//     />
//   )
// }

// export default AllOptions;
