import React, { useState } from 'react';
// import axiosInstance from '../../api/axiosInstance';

// export default function HelpPages() {
//   const [response, setResponse] = useState('');

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           axiosInstance.post(
//             '/help',
//             Object.fromEntries(new FormData(e.target)).then((data) =>
//               setResponse(data),
//             ),
//           );
//         }}
//       >
//         <input name="zap" placeholder="Введите имя"></input>
//         <button>Отправить</button>
//       </form>
//       {response && <div>{response}</div>}
//     </div>
//   );
// }
