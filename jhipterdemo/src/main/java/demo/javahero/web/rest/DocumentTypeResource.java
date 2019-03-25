package demo.javahero.web.rest;
import demo.javahero.domain.DocumentType;
import demo.javahero.service.DocumentTypeService;
import demo.javahero.web.rest.errors.BadRequestAlertException;
import demo.javahero.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing DocumentType.
 */
@RestController
@RequestMapping("/api")
public class DocumentTypeResource {

    private final Logger log = LoggerFactory.getLogger(DocumentTypeResource.class);

    private static final String ENTITY_NAME = "documentType";

    private final DocumentTypeService documentTypeService;

    public DocumentTypeResource(DocumentTypeService documentTypeService) {
        this.documentTypeService = documentTypeService;
    }

    /**
     * POST  /document-types : Create a new documentType.
     *
     * @param documentType the documentType to create
     * @return the ResponseEntity with status 201 (Created) and with body the new documentType, or with status 400 (Bad Request) if the documentType has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/document-types")
    public ResponseEntity<DocumentType> createDocumentType(@RequestBody DocumentType documentType) throws URISyntaxException {
        log.debug("REST request to save DocumentType : {}", documentType);
        if (documentType.getId() != null) {
            throw new BadRequestAlertException("A new documentType cannot already have an ID", ENTITY_NAME, "idexists");
        }
        DocumentType result = documentTypeService.save(documentType);
        return ResponseEntity.created(new URI("/api/document-types/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /document-types : Updates an existing documentType.
     *
     * @param documentType the documentType to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated documentType,
     * or with status 400 (Bad Request) if the documentType is not valid,
     * or with status 500 (Internal Server Error) if the documentType couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/document-types")
    public ResponseEntity<DocumentType> updateDocumentType(@RequestBody DocumentType documentType) throws URISyntaxException {
        log.debug("REST request to update DocumentType : {}", documentType);
        if (documentType.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        DocumentType result = documentTypeService.save(documentType);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, documentType.getId().toString()))
            .body(result);
    }

    /**
     * GET  /document-types : get all the documentTypes.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of documentTypes in body
     */
    @GetMapping("/document-types")
    public List<DocumentType> getAllDocumentTypes() {
        log.debug("REST request to get all DocumentTypes");
        return documentTypeService.findAll();
    }

    /**
     * GET  /document-types/:id : get the "id" documentType.
     *
     * @param id the id of the documentType to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the documentType, or with status 404 (Not Found)
     */
    @GetMapping("/document-types/{id}")
    public ResponseEntity<DocumentType> getDocumentType(@PathVariable Long id) {
        log.debug("REST request to get DocumentType : {}", id);
        Optional<DocumentType> documentType = documentTypeService.findOne(id);
        return ResponseUtil.wrapOrNotFound(documentType);
    }

    /**
     * DELETE  /document-types/:id : delete the "id" documentType.
     *
     * @param id the id of the documentType to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/document-types/{id}")
    public ResponseEntity<Void> deleteDocumentType(@PathVariable Long id) {
        log.debug("REST request to delete DocumentType : {}", id);
        documentTypeService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
