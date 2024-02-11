import React from 'react';

declare module 'react' {
  interface FunctionComponent<P = {}> {
    (props: P): React.ReactElement | null;
  }
}