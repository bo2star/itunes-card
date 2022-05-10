import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import useFetchTunes from "./useFetchTunes";

describe("useFetchTunes hook test", () => {
  test("useFetchTunes performs GET request", async () => {
    const mock = new MockAdapter(axios);

    const mockData = "response";
    const url = "http://mock";
    mock.onGet(url).reply(200, mockData);

    const { result, waitForNextUpdate } = renderHook(() => useFetchTunes(url));

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBeTruthy();

    await waitForNextUpdate();

    expect(result.current.data).toEqual("response");
    expect(result.current.loading).toBeFalsy();
  });
});
