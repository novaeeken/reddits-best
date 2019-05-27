import fetchData from '../helpers/fetchData';
import mockAxios from 'axios';

it('calls axios and returns an data object', async () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { data: {
        posts: [
          'Title1',
          'Title2',
          'Title3',
        ]
      }},
    })
  );

  const redditsBest = await fetchData('https://www.reddit.com/best.json?limit=10');

  expect(redditsBest).toEqual({
    posts: [
      'Title1',
      'Title2',
      'Title3',
    ]
  }
  );
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
})
