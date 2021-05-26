// import { useState } from 'react';

// const Accordion = ({ children, title, isExpand = false }) => {
//   const [expand, setExpand] = useState(isExpand);
//   return (
//     <div className="box">
//       <div className="title-box" onClick={() => setExpand((expand) => !expand)}>
//         <span className="title">{title}</span>
//         <span className="icon">
//           <i className={`fa fa-play-circle${!expand ? ' down' : ''}`} />
//         </span>
//         <div className="clearfix" />
//       </div>
//       {expand && <div className="content">{children}</div>}
//     </div>
//   );
// };

// export default Accordion;
