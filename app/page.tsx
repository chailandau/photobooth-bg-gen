'use client';

import { useState } from 'react';

import { Body1, Button, Heading2 } from '@octoml/design-system';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = async () => {
    setClicked(true);
    setLoading(true);
    const response = await fetch('/api/generateBg', {
      method: 'POST',
    });
    const data = await response.json();
    if (data.success) {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 p-10 pt-20 text-center">
      <Heading2>This little app is for generating backgrounds.</Heading2>
      <Button className="m-auto" onClick={handleClick}>
        Gimme gimme
      </Button>
      {clicked && <Body1>{loading ? 'Loading...' : 'Done!'}</Body1>}
    </div>
  );
}
