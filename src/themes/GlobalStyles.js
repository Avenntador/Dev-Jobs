import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.font};
    min-height: 100vh;

    @media (max-width: 56.25em) {
      min-width: 76.8rem;
    }

    @media (max-width: 37.5em) {
      min-width:  37.5rem;
    }
  }

  .buttonPrimary{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.buttonPrimary.background};
    color: ${({ theme }) => theme.colors.buttonPrimary.text};
    font-family: ${({ theme }) => theme.font};

    :hover {
        background-color: ${({ theme }) => theme.colors.buttonPrimary.hover};
    }
  }

  .buttonSecondary{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.buttonSecondary.background};
    color: ${({ theme }) => theme.colors.buttonSecondary.text};
    font-family: ${({ theme }) => theme.font};

    :hover {
        background-color: ${({ theme }) => theme.colors.buttonSecondary.hover};
    }
  }

  .searchForm {
    background-color: ${({ theme }) => theme.colors.searchForm.background};
    color: ${({ theme }) => theme.colors.searchForm.text};
  }  

  .checkbox {
    background-color: ${({ theme }) => theme.colors.checkbox.background};
  }

  .checkbox-label {
    color: ${({ theme }) => theme.colors.checkbox.text};
  }

  .switchButton {
    background-color: ${({ theme }) => theme.colors.switch.background};
  }

  .searchWrapper {
    background-color: ${({ theme }) => theme.colors.searchPanel.background};
  }

  .card {
    background-color: ${({ theme }) => theme.colors.card.background};
  }

  .cardPosition {
    color: ${({ theme }) => theme.colors.card.text};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.card.hover};
    }
  }

  .aboutCompany {
    background-color: ${({ theme }) => theme.colors.aboutCompany.background};
  }

  .aboutCompanyLabel {
    color: ${({ theme }) => theme.colors.aboutCompany.text};
  }

  .blank {
    background-color: ${({ theme }) => theme.colors.blank.background};
    color: ${({ theme }) => theme.colors.blank.text};
  }

  .blankLabel {
    color: ${({ theme }) => theme.colors.blank.labelText};
  }

  .footer {
    background-color: ${({ theme }) => theme.colors.footer.background};
    
  }
  
  .footerLabel {
    color: ${({ theme }) => theme.colors.footer.text};
  }

  .modal {
    background-color: ${({ theme }) => theme.colors.modal.background};
  }

  .modalLabel {
    color: ${({ theme }) => theme.colors.modal.text};
  }


`;
