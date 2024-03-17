// jwtAuthenticationMiddleware.test.js

const jwtAuthenticationMiddleware = require("../src/jwtAuthenticationMiddleware");

describe("JWT Authentication Middleware", () => {
    it("should return 401 if token is missing", () => {
        const req = { headers: {} };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        const next = jest.fn();

        jwtAuthenticationMiddleware(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ message: "Unauthorized: Token missing" });
        expect(next).not.toHaveBeenCalled();
    });

    it("should return 401 if token is invalid", () => {
        const req = { headers: { authorization: "invalidToken" } };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };
        const next = jest.fn();

        jwtAuthenticationMiddleware(req, res, next);

        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalledWith({ message: "Unauthorized: Invalid token" });
        expect(next).not.toHaveBeenCalled();
    });

    it("should call next middleware if token is valid", () => {
        const req = { headers: { authorization: "validToken" } };
        const res = {};
        const next = jest.fn();

        jest.spyOn(jwtAuthenticationMiddleware, "verifyToken").mockReturnValue({ userId: "testUserId" });

        jwtAuthenticationMiddleware(req, res, next);

        expect(next).toHaveBeenCalled();
        expect(req.user).toEqual({ userId: "testUserId" });
    });
});
