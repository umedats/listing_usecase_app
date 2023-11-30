import { render } from "@testing-library/react";
import QuickLinksComponent from "@/app/components/quick-links";
import translations from "@/app/internationalization/translations/en-US.json";
import { NextIntlProvider } from "next-intl";
import { US_LOCALE } from "@/app/constants/global";

const mockUsePathname = jest.fn();

jest.mock("next/navigation", () => ({
  usePathname() {
    return mockUsePathname();
  },
}));
describe("Quick link component", () => {
  test("renders settings", () => {
    mockUsePathname.mockImplementation(() => "/");
    const { asFragment } = render(
      <NextIntlProvider locale={US_LOCALE} messages={translations}>
        <QuickLinksComponent />
      </NextIntlProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("settings link is hidden in settings page", () => {
    mockUsePathname.mockImplementation(() => "/settings");
    const { asFragment } = render(
      <NextIntlProvider locale={US_LOCALE} messages={translations}>
        <QuickLinksComponent />
      </NextIntlProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("settings and info are rendered in other page", () => {
    mockUsePathname.mockImplementation(() => "/create-listing");
    const { asFragment } = render(
      <NextIntlProvider locale={US_LOCALE} messages={translations}>
        <QuickLinksComponent />
      </NextIntlProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
