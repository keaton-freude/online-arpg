import "../src/config/environment";
import Server from "../src/server/server";

const server = new Server();
server.listen(8080);
