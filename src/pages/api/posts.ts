import type { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const posts = [
    { id: 1, title: 'First Post', desc: 'This is the first post' },
    { id: 2, title: 'Second Post', desc: 'This is the second post' },
  ];

  res.status(200).json(posts);
};

export default handler;
