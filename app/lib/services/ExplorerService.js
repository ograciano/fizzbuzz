

class ExplorerService {
    static filterByMission(explorers = [] , mission = "") {
        return explorers.filter((explorer) => explorer.mission == mission);
    }
    
    static getAmountOfExplorersByMission(explorers = [], mission) {
        const amountExplorers = explorers.filter((explorer) => explorer.mission == mission);
        return amountExplorers.length;
    }
    
    static getExplorersUsernamesByMission(explorers = [], mission = "") {
        const explorersByMission = this.filterByMission(explorers, mission);
        return explorersByMission.map((explorer) => explorer.githubUsername);

    }
}

module.exports = ExplorerService;