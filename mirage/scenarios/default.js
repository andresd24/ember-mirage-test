export default function(server ) {
  server.createList('posts',10);
  server.createList('users', 10);
  //server.loadFixtures();
}
