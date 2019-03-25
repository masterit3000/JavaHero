package demo.javahero.service.impl;

import demo.javahero.service.CriteriaTypeService;
import demo.javahero.domain.CriteriaType;
import demo.javahero.repository.CriteriaTypeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing CriteriaType.
 */
@Service
@Transactional
public class CriteriaTypeServiceImpl implements CriteriaTypeService {

    private final Logger log = LoggerFactory.getLogger(CriteriaTypeServiceImpl.class);

    private final CriteriaTypeRepository criteriaTypeRepository;

    public CriteriaTypeServiceImpl(CriteriaTypeRepository criteriaTypeRepository) {
        this.criteriaTypeRepository = criteriaTypeRepository;
    }

    /**
     * Save a criteriaType.
     *
     * @param criteriaType the entity to save
     * @return the persisted entity
     */
    @Override
    public CriteriaType save(CriteriaType criteriaType) {
        log.debug("Request to save CriteriaType : {}", criteriaType);
        return criteriaTypeRepository.save(criteriaType);
    }

    /**
     * Get all the criteriaTypes.
     *
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<CriteriaType> findAll() {
        log.debug("Request to get all CriteriaTypes");
        return criteriaTypeRepository.findAll();
    }


    /**
     * Get one criteriaType by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<CriteriaType> findOne(Long id) {
        log.debug("Request to get CriteriaType : {}", id);
        return criteriaTypeRepository.findById(id);
    }

    /**
     * Delete the criteriaType by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete CriteriaType : {}", id);
        criteriaTypeRepository.deleteById(id);
    }
}
