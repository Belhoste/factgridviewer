'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">factgrid documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AdvancedSearchComponent.html" data-type="entity-link" >AdvancedSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdvancedSearchListComponent.html" data-type="entity-link" >AdvancedSearchListComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CareerDisplayComponent.html" data-type="entity-link" >CareerDisplayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DisplayComponent.html" data-type="entity-link" >DisplayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EducationDisplayComponent.html" data-type="entity-link" >EducationDisplayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FooterComponent.html" data-type="entity-link" >FooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HarmoniaUniversalisComponent.html" data-type="entity-link" >HarmoniaUniversalisComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderDisplayComponent.html" data-type="entity-link" >HeaderDisplayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IframesDisplayComponent.html" data-type="entity-link" >IframesDisplayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ItemInfoComponent.html" data-type="entity-link" >ItemInfoComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MainDisplayComponent.html" data-type="entity-link" >MainDisplayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MapComponent.html" data-type="entity-link" >MapComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ParisSearchComponent.html" data-type="entity-link" >ParisSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProjectSelectComponent.html" data-type="entity-link" >ProjectSelectComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SearchComponent.html" data-type="entity-link" >SearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SociabilityDisplayComponent.html" data-type="entity-link" >SociabilityDisplayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SourcesDisplayComponent.html" data-type="entity-link" >SourcesDisplayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/Sparql0DisplayComponent.html" data-type="entity-link" >Sparql0DisplayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/Sparql1DisplayComponent.html" data-type="entity-link" >Sparql1DisplayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/Sparql2DisplayComponent.html" data-type="entity-link" >Sparql2DisplayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/Sparql3DisplayComponent.html" data-type="entity-link" >Sparql3DisplayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/Sparql4DisplayComponent.html" data-type="entity-link" >Sparql4DisplayComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StatementSearchComponent.html" data-type="entity-link" >StatementSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StatementSearchComponent-1.html" data-type="entity-link" >StatementSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TextDisplayComponent.html" data-type="entity-link" >TextDisplayComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ArrayToCsvService.html" data-type="entity-link" >ArrayToCsvService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BackListDetailsService.html" data-type="entity-link" >BackListDetailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BackListService.html" data-type="entity-link" >BackListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BlockDisplayService.html" data-type="entity-link" >BlockDisplayService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateCompleteItemService.html" data-type="entity-link" >CreateCompleteItemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CreateItemToDisplayService.html" data-type="entity-link" >CreateItemToDisplayService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService-1.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DetailsService.html" data-type="entity-link" >DetailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DetailsService-1.html" data-type="entity-link" >DetailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FactgridSubtitlesService.html" data-type="entity-link" >FactgridSubtitlesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GregorianToJulianCalendarService.html" data-type="entity-link" >GregorianToJulianCalendarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HuDatabaseService.html" data-type="entity-link" >HuDatabaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IframesDisplayService.html" data-type="entity-link" >IframesDisplayService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/IframesDisplayService-1.html" data-type="entity-link" >IframesDisplayService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ItemDetailsService.html" data-type="entity-link" >ItemDetailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ItemDisplayDispatcherService.html" data-type="entity-link" >ItemDisplayDispatcherService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ItemInfoService.html" data-type="entity-link" >ItemInfoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ItemSparqlService.html" data-type="entity-link" >ItemSparqlService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ItemSparqlService-1.html" data-type="entity-link" >ItemSparqlService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ListDetailsService.html" data-type="entity-link" >ListDetailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LongestWordService.html" data-type="entity-link" >LongestWordService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MapService.html" data-type="entity-link" >MapService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MutatorService.html" data-type="entity-link" >MutatorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ParisDatabaseService.html" data-type="entity-link" >ParisDatabaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProjectsListService.html" data-type="entity-link" >ProjectsListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PropertiesListService.html" data-type="entity-link" >PropertiesListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PropertyDetailsService.html" data-type="entity-link" >PropertyDetailsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RequestService.html" data-type="entity-link" >RequestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RoleOfObjectRenderingService.html" data-type="entity-link" >RoleOfObjectRenderingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchEngineService.html" data-type="entity-link" >SearchEngineService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SelectedItemListService.html" data-type="entity-link" >SelectedItemListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SelectedItemListService-1.html" data-type="entity-link" >SelectedItemListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SelectedLangService.html" data-type="entity-link" >SelectedLangService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SetDataService.html" data-type="entity-link" >SetDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SetItemToDisplayService.html" data-type="entity-link" >SetItemToDisplayService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SetLanguageService.html" data-type="entity-link" >SetLanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SetSelectedItemsListService.html" data-type="entity-link" >SetSelectedItemsListService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SetSubtitleService.html" data-type="entity-link" >SetSubtitleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SetTimeService.html" data-type="entity-link" >SetTimeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SortingDataAccessorService.html" data-type="entity-link" >SortingDataAccessorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatementsControlsService.html" data-type="entity-link" >StatementsControlsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TechnicalitiesDisplayService.html" data-type="entity-link" >TechnicalitiesDisplayService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TranscriptDisplayService.html" data-type="entity-link" >TranscriptDisplayService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TranscriptionService.html" data-type="entity-link" >TranscriptionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TypologyService.html" data-type="entity-link" >TypologyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WikiDisplayService.html" data-type="entity-link" >WikiDisplayService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/SparqlInterceptor.html" data-type="entity-link" >SparqlInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Bank.html" data-type="entity-link" >Bank</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Claim.html" data-type="entity-link" >Claim</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ClaimsObject.html" data-type="entity-link" >ClaimsObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Data.html" data-type="entity-link" >Data</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DisplayFlags.html" data-type="entity-link" >DisplayFlags</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Entity.html" data-type="entity-link" >Entity</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HU.html" data-type="entity-link" >HU</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ItemType.html" data-type="entity-link" >ItemType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Lang.html" data-type="entity-link" >Lang</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Qualifier.html" data-type="entity-link" >Qualifier</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Qualifier-1.html" data-type="entity-link" >Qualifier</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QuantityVariable.html" data-type="entity-link" >QuantityVariable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Reference.html" data-type="entity-link" >Reference</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Selection.html" data-type="entity-link" >Selection</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Snak.html" data-type="entity-link" >Snak</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Statement.html" data-type="entity-link" >Statement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Statement-1.html" data-type="entity-link" >Statement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Statement-2.html" data-type="entity-link" >Statement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StringVariable.html" data-type="entity-link" >StringVariable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TimeProperty.html" data-type="entity-link" >TimeProperty</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TimeVariable.html" data-type="entity-link" >TimeVariable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Variable.html" data-type="entity-link" >Variable</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#pipes-links"' :
                                'data-bs-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/BackListIdPipe.html" data-type="entity-link" >BackListIdPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/ChangeUndefinedItemPipe.html" data-type="entity-link" >ChangeUndefinedItemPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/CommaJoinPipe.html" data-type="entity-link" >CommaJoinPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/CustomDatePipe.html" data-type="entity-link" >CustomDatePipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/JoinPipe.html" data-type="entity-link" >JoinPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/SafeHtmlPipe.html" data-type="entity-link" >SafeHtmlPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/UnitPipe.html" data-type="entity-link" >UnitPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});