// Import function
const { getApiUrl } = require('./getApiUrl');

const mockData = `http://1.1.1.1/api/mock_username`;

// Tests
test('Create apiUrl from environment variables (getApiUrl)', () => {
expect(getApiUrl())
  .toEqual(mockData);
});