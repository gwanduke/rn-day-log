import React from 'react';
import {createContext, useState} from 'react';
import {v4 as uuidV4} from 'uuid';

const LogContext = createContext();

export function LogContextProvider({children}) {
  const [logs, setLogs] = useState([
    {
      id: uuidV4(),
      title: '첫번째 로그',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu laoreet nibh. Praesent lectus massa, finibus eu lectus non, congue sodales lectus. Mauris dignissim nibh massa, at ultricies ligula aliquam at. Suspendisse ex orci, tristique non ex eget, rhoncus egestas ex. In libero massa, facilisis a nulla aliquet, molestie vestibulum erat. Morbi a libero sollicitudin, accumsan dolor ut, pulvinar lacus. Quisque pellentesque sapien quis quam tincidunt egestas. Nullam suscipit tempus elit, a interdum lacus consectetur nec. Cras eu aliquam diam. Sed finibus malesuada ante, eu sodales mauris facilisis vel. Nam vitae condimentum quam, ac finibus libero. Maecenas hendrerit viverra nibh, sed pretium mauris ornare non. Nulla lectus ipsum, dignissim eu ipsum non, congue malesuada mauris. Nulla quis euismod dolor. Etiam risus dolor, vestibulum a ipsum et, ultrices condimentum leo.',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4).toISOString(),
    },
    {
      id: uuidV4(),
      title: '두번째 로그',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu laoreet nibh. Praesent lectus massa, finibus eu lectus non, congue sodales lectus. Mauris dignissim nibh massa, at ultricies ligula aliquam at. Suspendisse ex orci, tristique non ex eget, rhoncus egestas ex. In libero massa, facilisis a nulla aliquet, molestie vestibulum erat. Morbi a libero sollicitudin, accumsan dolor ut, pulvinar lacus. Quisque pellentesque sapien quis quam tincidunt egestas. Nullam suscipit tempus elit, a interdum lacus consectetur nec. Cras eu aliquam diam. Sed finibus malesuada ante, eu sodales mauris facilisis vel. Nam vitae condimentum quam, ac finibus libero. Maecenas hendrerit viverra nibh, sed pretium mauris ornare non. Nulla lectus ipsum, dignissim eu ipsum non, congue malesuada mauris. Nulla quis euismod dolor. Etiam risus dolor, vestibulum a ipsum et, ultrices condimentum leo.',
      date: new Date().toISOString(),
    },
  ]);

  const onCreate = ({title, body, date}) => {
    const log = {
      id: uuidV4(),
      title,
      body,
      date,
    };

    setLogs([log, ...logs]);
  };

  return (
    <LogContext.Provider value={{logs, onCreate}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
