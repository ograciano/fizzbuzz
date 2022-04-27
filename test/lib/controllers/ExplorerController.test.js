const ExplorerController = require("../../../app/lib/controllers/ExplorerController");

describe("Unit Test for ExplorerController Class", () => {
    test("Obtener los explorers por mision", () => {
        // Aqui invocas el codigo que cas a usar en tu app
        const explorersMissionNode = ExplorerController.getExplorerByMission("node");
        const explorersMissionJava = ExplorerController.getExplorerByMission("java");
        // Aqui validad los resultados de ese codigo
        // Esta comparacioh que va a igualar de la izquierda con el valor de la derache (valor esperado)
        expect(explorersMissionNode.length).toBe(10);
        expect(explorersMissionJava.length).toBe(5);
    });
    test("Obtener los usernames de los explorers por mision", () => {
        // Aqui invocas el codigo que cas a usar en tu app
        const usernamesMissionNode = ExplorerController.getExplorersUsernamesByMission("node");
        const usernamesMissionJava = ExplorerController.getExplorersUsernamesByMission("java");
        // Aqui validad los resultados de ese codigo
        // Esta comparacioh que va a igualar de la izquierda con el valor de la derache (valor esperado)
        expect(usernamesMissionNode[0]).toBe("ajolonauta1");
        expect(usernamesMissionJava[0]).toBe("ajolonauta6");
    });
    test("Obtener la cantidad de usuarios por mision", () => {
        // Aqui invocas el codigo que cas a usar en tu app
        const amountMissionNode = ExplorerController.getExplorersAmonutByMission("node");
        const amountMissionJava = ExplorerController.getExplorersAmonutByMission("java");
        // Aqui validad los resultados de ese codigo
        // Esta comparacioh que va a igualar de la izquierda con el valor de la derache (valor esperado)
        expect(amountMissionNode).toBe(10);
        expect(amountMissionJava).toBe(5);
    });
});